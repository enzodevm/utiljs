/*! util.js v1.0.0 | MIT | Enzo DEV */

(function (global) {
  "use strict";

  // Delay uma função até parar de ser chamada
  function debounce(fn, wait = 200) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(null, args), wait);
    };
  }

  // Transformar texto em slug
  function slugify(str = "") {
    return String(str)
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // Número aleatório inteiro
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Data formatada (DD/MM/AAAA)
  function formatDate(date = new Date()) {
    return date.toLocaleDateString("pt-BR");
  }

  // Capitalizar primeira letra
  function capitalize(str = "") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Expor no navegador
  global.Util = { debounce, slugify, randomInt, formatDate, capitalize };

})(typeof window !== "undefined" ? window : this);
