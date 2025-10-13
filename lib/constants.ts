export const NAV_ITEMS = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    // { href: '/watchlist', label: 'Watchlist' },
];

// Sign-up form select options
export const INVESTMENT_GOALS = [
    { value: 'Growth', label: 'Growth' },
    { value: 'Income', label: 'Income' },
    { value: 'Balanced', label: 'Balanced' },
    { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
    { value: 'upper', label: 'Upper' },
    { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
    { value: 'greater', label: 'Greater than (>)' },
    { value: 'less', label: 'Less than (<)' },
];

// TradingView Charts
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark',
    dateRange: '12M',
    locale: 'en',
    largeChartUrl: '',
    isTransparent: true,
    showFloatingTooltip: true,
    plotLineColorGrowing: '#0FEDBE',
    plotLineColorFalling: '#0FEDBE',
    gridLineColor: 'rgba(240, 243, 250, 0)',
    scaleFontColor: '#DBDBDB',
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)',
    tabs: [
        {
            title: 'Overview',
            symbols: [
                { s: 'CRYPTOCAP:TOTAL', d: 'Total Market Cap' },
                { s: 'BITSTAMP:BTCUSD', d: 'Bitcoin / USD' },
                { s: 'BITSTAMP:ETHUSD', d: 'Ethereum / USD' },
                { s: 'COINBASE:SOLUSD', d: 'Solana / USD' },
                { s: 'BINANCE:AVAXUSD', d: 'Avalanche / USD' },
                { s: 'COINBASE:UNIUSD', d: 'Uniswap / USD' },
            ],
        },
        {
            title: 'Bitcoin Pairs',
            symbols: [
                { s: 'BITSTAMP:BTCUSD', d: 'BTC / USD' },
                { s: 'COINBASE:BTCEUR', d: 'BTC / EUR' },
                { s: 'COINBASE:BTCGBP', d: 'BTC / GBP' },
                { s: 'BITFLYER:BTCJPY', d: 'BTC / JPY' },
                { s: 'BINANCE:BTCUSDT', d: 'BTC / USDT' },
            ],
        },
        {
            title: 'Ethereum Pairs',
            symbols: [
                { s: 'BITSTAMP:ETHUSD', d: 'ETH / USD' },
                { s: 'KRAKEN:ETHEUR', d: 'ETH / EUR' },
                { s: 'COINBASE:ETHGBP', d: 'ETH / GBP' },
                { s: 'BINANCE:ETHBTC', d: 'ETH / BTC' },
                { s: 'BINANCE:ETHUSDT', d: 'ETH / USDT' },
            ],
        },
    ],
    support_host: 'https://www.tradingview.com',
    backgroundColor: '#141414',
    width: '100%',
    height: 600,
    showSymbolLogo: true,
    showChart: true,
};

export const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'Crypto',  // changed from stock index to crypto
    blockSize: 'market_cap_calc',
    blockColor: '24h_close_change | 5',
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: '100%',
    height: '600',
};

export const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'crypto',  // change from 'stock' to 'crypto'
    width: '100%',
    height: '600',
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Cryptocurrencies',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: 'Overview',
            symbols: [
                { name: 'CRYPTOCAP:TOTAL', displayName: 'Total Market Cap' },
                { name: 'BITSTAMP:BTCUSD', displayName: 'Bitcoin / USD' },
                { name: 'BITSTAMP:ETHUSD', displayName: 'Ethereum / USD' },
                { name: 'COINBASE:SOLUSD', displayName: 'Solana / USD' },
                { name: 'BINANCE:AVAXUSD', displayName: 'Avalanche / USD' },
                { name: 'COINBASE:UNIUSD', displayName: 'Uniswap / USD' },
            ],
        },
        {
            name: 'Bitcoin Pairs',
            symbols: [
                { name: 'BITSTAMP:BTCUSD', displayName: 'BTC / USD' },
                { name: 'COINBASE:BTCEUR', displayName: 'BTC / EUR' },
                { name: 'COINBASE:BTCGBP', displayName: 'BTC / GBP' },
                { name: 'BITFLYER:BTCJPY', displayName: 'BTC / JPY' },
                { name: 'BINANCE:BTCUSDT', displayName: 'BTC / USDT' },
            ],
        },
        {
            name: 'Ethereum Pairs',
            symbols: [
                { name: 'BITSTAMP:ETHUSD', displayName: 'ETH / USD' },
                { name: 'KRAKEN:ETHEUR', displayName: 'ETH / EUR' },
                { name: 'COINBASE:ETHGBP', displayName: 'ETH / GBP' },
                { name: 'BINANCE:ETHBTC', displayName: 'ETH / BTC' },
                { name: 'BINANCE:ETHUSDT', displayName: 'ETH / USDT' },
            ],
        },
    ],
};


export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 1,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 10,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 464,
    displayMode: 'regular',
    largeChartUrl: '',
});

export const POPULAR_CRYPTO_SYMBOLS = [
    // Major Cryptocurrencies (Top Market Cap)
    'BTC',   // Bitcoin
    'ETH',   // Ethereum
    'BNB',   // Binance Coin
    'SOL',   // Solana
    'XRP',   // Ripple
    'ADA',   // Cardano
    'DOGE',  // Dogecoin
    'AVAX',  // Avalanche
    'TRX',   // TRON
    'DOT',   // Polkadot

    // Layer-2 & Infrastructure Projects
    'MATIC', // Polygon
    'ARB',   // Arbitrum
    'OP',    // Optimism
    'TIA',   // Celestia
    'INJ',   // Injective
    'LINK',  // Chainlink
    'ATOM',  // Cosmos
    'FTM',   // Fantom
    'NEAR',  // NEAR Protocol
    'AAVE',  // Aave
    
    // AI, Metaverse & Gaming Tokens
    'RNDR',  // Render
    'AGIX',  // SingularityNET
    'FET',   // Fetch.ai
    'GALA',  // Gala Games
    'SAND',  // The Sandbox
    'MANA',  // Decentraland
    'IMX',   // Immutable X
    'APE',   // ApeCoin
    'WLD',   // Worldcoin
    'PYTH',  // Pyth Network

    // Emerging Altcoins & Ecosystem Tokens
    'JUP',   // Jupiter
    'BONK',  // Bonk
    'PEPE',  // Pepe
    'SEI',   // Sei Network
    'SKL',   // SKALE
    'ROSE',  // Oasis Network
    'EGLD',  // MultiversX
    'XLM',   // Stellar
    'FIL',   // Filecoin
    'AR',    // Arweave

    // DeFi & Web3 Platforms
    'UNI',   // Uniswap
    'SUSHI', // SushiSwap
    'CAKE',  // PancakeSwap
    'CRV',   // Curve DAO
    'LDO',   // Lido DAO
    'RUNE',  // ThorChain
    'DYDX',  // dYdX
    'GMX',   // GMX
    '1INCH', // 1inch
    'COMP',  // Compound

];


export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action',
];