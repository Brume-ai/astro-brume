import React, { useState, useMemo } from 'react';

interface PriceTier {
    words: number;
    discount: number;
    pricePerWord: number;
}

interface RebuyWordsProps {
    onCheckout?: (wordCount: number) => void;
}

const RebuyWords: React.FC<RebuyWordsProps> = ({ onCheckout }) => {
    const [wordCount, setWordCount] = useState<number>(1000);

    // Pricing tiers from the PHP component
    const priceTable: PriceTier[] = [
        { words: 1000, discount: 0, pricePerWord: 0.021 },
        { words: 5000, discount: 15, pricePerWord: 0.018 },
        { words: 15000, discount: 20, pricePerWord: 0.017 },
        { words: 40000, discount: 25, pricePerWord: 0.016 },
        { words: 70000, discount: 30, pricePerWord: 0.015 },
        { words: 130000, discount: 35, pricePerWord: 0.014 },
    ];

    // Get current pricing tier based on word count
    const currentTier = useMemo(() => {
        return priceTable.reduce((prev, curr) =>
            wordCount >= curr.words ? curr : prev
        );
    }, [wordCount]);

    // Get next tier for special offers
    const nextTier = useMemo(() => {
        const nextTierIndex = priceTable.findIndex(tier => tier.words > wordCount);
        return nextTierIndex !== -1 ? priceTable[nextTierIndex] : null;
    }, [wordCount]);

    // Calculate words needed to reach next tier
    const wordsToNextTier = useMemo(() => {
        return nextTier ? nextTier.words - wordCount : 0;
    }, [nextTier, wordCount]);

    // Price calculations
    const basePrice = useMemo(() => {
        return wordCount * priceTable[0].pricePerWord;
    }, [wordCount]);

    const finalPrice = useMemo(() => {
        return wordCount * currentTier.pricePerWord;
    }, [wordCount, currentTier]);

    // Formatting functions
    const formatPrice = (price: number, minimumFractionDigits: number = 2): string => {
        let roundedPrice = price;
        if (minimumFractionDigits === 2) {
            roundedPrice = Math.round(price * 100) / 100;
        }
        if (minimumFractionDigits === 3) {
            roundedPrice = Math.round(price * 1000) / 1000;
        }

        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: price % 1 === 0 ? 0 : minimumFractionDigits,
            maximumFractionDigits: price % 1 === 0 ? 0 : minimumFractionDigits,
        }).format(roundedPrice);
    };

    const formatNumber = (num: number): string => {
        return new Intl.NumberFormat('fr-FR').format(num);
    };

    const handleWordCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1000, parseInt(e.target.value) || 1000);
        setWordCount(value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onCheckout) {
            onCheckout(wordCount);
        }
    };

    const selectTier = (tierWords: number) => {
        setWordCount(tierWords);
    };

    const upgradeToNextTier = () => {
        if (nextTier) {
            setWordCount(nextTier.words);
        }
    };

    return (
        <div className="space-y-8">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Pricing Table Section */}
                    <div className="md:col-span-3 flex flex-col gap-8 order-2 md:order-1">
                        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-semibold mb-4">
                                Tarifs et réductions par volume
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="text-left">
                                        <tr>
                                            <th className="py-2 text-sm font-medium text-gray-700 dark:text-gray-300">Crédits</th>
                                            <th className="py-2 text-sm font-medium text-gray-700 dark:text-gray-300">Réduction</th>
                                            <th className="py-2 text-sm font-medium text-gray-700 dark:text-gray-300">Prix par crédit</th>
                                            <th className="py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {priceTable.map((tier) => (
                                            <tr key={tier.words} className="border-t border-gray-100 dark:border-gray-700">
                                                <td className="py-2 text-sm">{formatNumber(tier.words)}</td>
                                                <td className="py-2 text-sm">{tier.discount ? `${tier.discount}%` : '-'}</td>
                                                <td className="py-2 text-sm">{formatPrice(tier.pricePerWord, 3)}</td>
                                                <td className="py-2 flex justify-end">
                                                    <button
                                                        type="button"
                                                        onClick={() => selectTier(tier.words)}
                                                        className={`text-xs font-medium focus:outline-none focus:ring-1 ring-offset-2 focus:ring-opacity-50 rounded-lg border py-1 px-3 flex items-center gap-1 mx-2 transition-colors ${wordCount === tier.words
                                                            ? 'text-white bg-green-500 border-green-500 ring-green-500 dark:bg-green-900 dark:text-green-300 dark:border-green-600 dark:ring-green-600'
                                                            : 'text-violet-500 border-violet-300 ring-violet-300 hover:bg-violet-50 dark:bg-violet-900 dark:text-violet-300 dark:border-violet-600 dark:ring-violet-600 dark:hover:bg-violet-800'
                                                            }`}
                                                    >
                                                        {wordCount === tier.words ? 'Sélectionné' : 'Sélectionner'}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-center rounded-lg p-4 mb-6 text-sm font-semibold border text-violet-600 dark:text-violet-100 bg-violet-50 dark:bg-violet-900 border-violet-200 dark:border-violet-700">
                            <div className="flex items-center gap-4">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Sans coûts cachés</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Crédits valables 1 an</span>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Section */}
                    <div className="relative md:col-span-2 order-1 md:order-2">
                        <div className="sticky top-20 font-medium">
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                                <h3 className="text-lg font-semibold mb-4">
                                    Résumé de la commande
                                </h3>

                                <div className="flex items-center justify-between font-bold border-b dark:border-gray-600 pb-6 mb-4">
                                    <span>Nombre de crédits</span>
                                    <input
                                        type="number"
                                        min="1000"
                                        max="10000000"
                                        step="1000"
                                        value={wordCount}
                                        onChange={handleWordCountChange}
                                        onBlur={(e) => setWordCount(Math.max(1000, parseInt(e.target.value) || 1000))}
                                        className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span>Prix</span>
                                        <span>{formatPrice(basePrice)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Réduction</span>
                                        <span>{currentTier.discount}%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Prix par crédit</span>
                                        <span>{formatPrice(currentTier.pricePerWord, 3)}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold pt-6 border-t dark:border-gray-600">
                                        <span>Prix total</span>
                                        <span>{formatPrice(finalPrice)}</span>
                                    </div>
                                </div>

                                {/* Special Offer */}
                                {nextTier && (
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="font-medium text-sm">
                                                Offre spéciale
                                            </div>
                                            <div className="text-right flex-1">
                                                <span className="font-bold text-sm">{formatPrice(nextTier.pricePerWord * nextTier.words)}</span>
                                                <span className="text-gray-400 line-through ml-2 text-sm">{formatPrice(priceTable[0].pricePerWord * nextTier.words)}</span>
                                            </div>
                                        </div>
                                        <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                                            Ajoutez <span className="font-bold">{formatNumber(wordsToNextTier)}</span> crédits et obtenez
                                            <span className="font-bold"> {nextTier.discount}%</span> de réduction
                                        </p>
                                        <button
                                            type="button"
                                            onClick={upgradeToNextTier}
                                            className="mt-3 w-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded text-xs transition-colors"
                                        >
                                            Ajouter {formatNumber(wordsToNextTier)} crédits
                                        </button>
                                    </div>
                                )}

                                <a
                                    href="https://app.brume.ai"
                                    className={`w-full inline-block text-center font-medium py-3 px-4 rounded-lg transition-colors ${wordCount < 1000
                                        ? 'bg-gray-400 cursor-not-allowed text-white pointer-events-none'
                                        : 'bg-violet-600 hover:bg-violet-700 text-white'
                                        }`}
                                >
                                    Continuer
                                </a>
                            </div>

                            {/* Reviews Section */}
                            <div className="px-6 py-8 text-center flex items-center gap-4 justify-between">
                                <div className="text-sm font-bold text-gray-600 dark:text-gray-200">Découvrez les avis de nos Clients :</div>
                                <a href="https://www.capterra.com/p/10023792/Brume/reviews/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="w-full max-w-[120px]"
                                        src="https://brand-assets.capterra.com/badge/2331be09-d154-4706-99d6-1a8876cfd615.svg"
                                        alt="Capterra Reviews"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RebuyWords;
