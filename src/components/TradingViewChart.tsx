'use client';
// components/TradingViewChart.tsx
import { useEffect } from 'react';

interface TradingViewChartProps {
  symbol: string;
  width?: string | number;
  height?: string | number;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ symbol, width = "100%", height = 500 }) => {
  useEffect(() => {
    // Check if TradingView is already available, if not, load the script
    const loadTradingViewScript = () => {
      return new Promise<void>((resolve) => {
        if ((window as any).TradingView) {
          resolve(); // TradingView is already loaded
        } else {
          const script = document.createElement('script');
          script.src = "https://s3.tradingview.com/tv.js";
          script.async = true;
          script.onload = () => resolve();
          document.head.appendChild(script);
        }
      });
    };

    // Load the script and initialize the widget after the script is ready
    loadTradingViewScript().then(() => {
      if ((window as any).TradingView) {
        new (window as any).TradingView.widget({
          container_id: `tradingview_${symbol}`,
          width,
          height,
          symbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
        });
      }
    });

    // Cleanup: remove the TradingView widget container when the component unmounts
    return () => {
      const container = document.getElementById(`tradingview_${symbol}`);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [symbol, width, height]);

  return (
    <div id={`tradingview_container_${symbol}`}>
      <div id={`tradingview_${symbol}`} />
    </div>
  );
};

export default TradingViewChart;
