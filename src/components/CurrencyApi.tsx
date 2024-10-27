import React from 'react';
import Link from 'next/link';
require("../styles/currencyApi.css");

const CurrencyApi: React.FC = () => {
    return (
        <div className="uniform-margin">
            <div id="currency-api-container">
                <h1 id="currency-api-header">Currency Data API</h1>
                <p>
                    Integrate our powerful Currency API into your website to provide real-time exchange rate data 
                    and seamless currency conversions. With up-to-the-minute accuracy and support for a wide array 
                    of global currencies, our API is perfect for e-commerce platforms, financial tools, and international 
                    businesses. Simple to implement, scalable, and reliable for your users' currency needs."
                </p>
                <Link href='' id="check-api-plan-btn">Check Our Currency API Plans</Link>
            </div>
        </div>
    )
}

export default CurrencyApi;
