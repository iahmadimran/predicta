import TradingViewWidget from "@/components/TradingViewWidget";
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants";

export default function Home() {
  const widgetTypes = {
    marketOverview: 'market-overview',
    stockHeatmap: 'stock-heatmap',
    advancedChart: 'advanced-chart',
    marketQuotes: 'market-quotes',
    timeline: 'timeline'
  }

  return (
    <div className="flex home-wrapper min-h-screen">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`https://s3.tradingview.com/external-embedding/embed-widget-${widgetTypes.marketOverview}.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={`https://s3.tradingview.com/external-embedding/embed-widget-${widgetTypes.stockHeatmap}.js`}
            config={HEATMAP_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            scriptUrl={`https://s3.tradingview.com/external-embedding/embed-widget-${widgetTypes.timeline}.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            scriptUrl={`https://s3.tradingview.com/external-embedding/embed-widget-${widgetTypes.marketQuotes}.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
}
