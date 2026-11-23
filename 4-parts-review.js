return $input.all().map((item, index) => ({
  json: {
    ...item.json,
    trainingReview: item.json.stockCount === 0 ? "order-part" : "stock-available"
  },
  pairedItem: { item: index }
}));