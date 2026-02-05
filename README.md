# Search engine for an e-commerce platform


This project was developed as part of a backend technical assignment.
The primary focus was on implementing intelligent search logic,
query understanding, and ranking mechanisms using Node.js and Express.

This API goes beyond simple keyword matching by **understanding user intent**, applying **smart filters**, and **ranking products dynamically** based on multiple signals.

---

## 🚀 Features

- Intent-based product search
- Keyword + intent hybrid queries
- Price filtering & budget-based ranking
- Latest product boosting
- Typo-tolerant search
- Intelligent scoring & ranking
- In-memory product storage (no DB)

---

## 📌 Supported Search Queries

The API supports **keyword-based**, **intent-based**, and **natural language** searches.

### 1️⃣ Basic Keyword Search
```

GET /api/v1/search/product?query=iPhone

```
Returns all products matching **iPhone**, ranked by relevance.

---

### 2️⃣ Cheap / Budget Intent Search
```

GET /api/v1/search/product?query=Sasta

```
Returns all products, ranking **cheaper products higher**.

---

### 3️⃣ Latest Products Search
```

GET /api/v1/search/product?query=Latest

```
Boosts **recently added products** in the ranking.

---

### 4️⃣ Price-Based Search
```

GET /api/v1/search/product?query=iPhone 50k

```
Returns products priced **≤ ₹50,000**.

---

### 5️⃣ Keyword + Price Intent
```

GET /api/v1/search/product?query=Samsung under 30000

```
Filters **Samsung products under ₹30,000** and ranks them.

---

### 6️⃣ Combined Intent + Keyword
```

GET /api/v1/search/product?query=Sasta iPhone

```
Returns **iPhones**, ranking **cheaper iPhones higher**.

---

### 7️⃣ Latest + Keyword
```

GET /api/v1/search/product?query=Latest iPhone

```
Returns **iPhones**, with **newer models ranked first**.

---

### 8️⃣ Typo-Tolerant Search
```

GET /api/v1/search/product?query=ifone latest

```
Handles common typos like:
```

ifone → iphone

```

---

### 9️⃣ Intent-Only Query
```

GET /api/v1/search/product?query=Sasta Latest

```
No keyword filtering — **only intent-based ranking applied**.

---

### 🔟 Natural Language Query
```

GET /api/v1/search/product?query=latest iphone under 60k

````

Understands:
- **Keyword** → iphone  
- **Price** → 60000  
- **Intent** → latest  

---

## 📤 Sample API Response

```json
{
  "query": "iPhone 50k",
  "totalResults": 1,
  "data": [
    {
      "productId": 1,
      "title": "iPhone 16",
      "price": 59000,
      "rating": 4.5,
      "score": 65
    }
  ]
}
````

---

## 🧮 Ranking Logic (High Level)

Each product is assigned a **score** based on multiple signals:

* **Price Intent**

  * Cheaper products score higher when queries include words like `sasta`, `cheap`, `budget`

* **Latest Intent**

  * Recently added products get boosted for `latest` queries

* **User Rating**

  * Higher-rated products receive more weight

* **Discount Percentage**

  * Bigger discounts improve ranking

📊 Products are finally **sorted by score (descending order)**.

---

## 🧠 About This Project

This project focuses on **search intelligence**, not UI or database management.

Key goals:

* Understand user intent
* Apply intelligent filtering
* Rank products using real-world signals

It mimics how actual e-commerce platforms think about search relevance.

---

## 🚫 Database Note

As per assignment scope:

* Product data is stored **in-memory**
* ❌ No MongoDB or external database used
* Emphasis is on **search logic & ranking**

---

## 🚀 Deployment

The API is deployed and publicly accessible.

### 🔗 Live API URL

```
```

---

## 🧪 Try Live Example

```
https://product-search-engine.onrender.com/api/v1/search/product?query=Sasta
```

---

## ✅ Assignment Scope Coverage

✔ Node.js + Express
✔ REST Search API
✔ Intent-based ranking logic
✔ In-memory data storage
✔ Deployed backend
✔ GitHub repository

---

## 🧠 Author

**Rajesh Kumar**
Backend / Full Stack Developer

---

## 📌 Notes

This project intentionally avoids:

* Frontend UI
* Database persistence

to stay aligned with assignment requirements and keep the focus strictly on **backend search logic & ranking intelligence**.


