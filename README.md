# Country Info Finder 🌍

A small, focused web app that lets users search for a country and see key details (capital, region, population, flag) using live data from a public API.

The goal of this project is to demonstrate **solid web fundamentals**: client–server communication, DNS, HTTP, URLs, and JSON.

---

## What This Project Demonstrates (for reviewers)

- I understand the **client–server model**: the browser acts as the client, the API as the server.
- I can explain how **DNS** resolves a domain (e.g. `restcountries.com`) to an IP address before any HTTP request is sent.
- I know how **HTTP requests and responses** work at a high level:
  - Requests target a specific **URL** (protocol, domain, path, query).
  - Responses include **status codes** (e.g. `200 OK`, `404 Not Found`) and a **body**.
- I can work with **JSON** as structured data, separate from **HTML** as page structure.
- I can take JSON from an API and **turn it into dynamic UI** in the browser.

---

## High-Level App Flow

1. **User action (Client)**
   - The user types a country name and clicks search in the browser.

2. **DNS + URL**
   - The browser uses the API’s **URL**.
   - **DNS** translates the domain into an **IP address**, so the request reaches the correct server.

3. **HTTP Request**
   - The browser (client) sends an **HTTP request** to the API for that country.

4. **Server Response**
   - The server processes the request and returns:
     - A **status code** (success or error).
     - A **JSON** body with country data (name, capital, population, flag, etc.).

5. **Dynamic UI Update**
   - The app reads the JSON and updates the page to show a **country card** with the new information.

---

## Key Concepts Used

- Client–server architecture
- DNS lookup (domain → IP)
- URL structure (protocol, domain, path, query)
- HTTP requests, responses, and status codes
- JSON (data) vs HTML (structure)
- Dynamic page updates based on API responses

---

## Why It’s Relevant

Even though this is a small project, it clearly shows that I can:

- Reason about how the **web actually works** under the hood.
- Use real HTTP APIs and **JSON data** in a browser-based app.
- Communicate technical concepts in clear, simple language.
