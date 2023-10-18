import React from 'react'

function FormatPrice({ val }) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
    maximumFractionDigits: 0,
  }).format(val );
}

export default FormatPrice;