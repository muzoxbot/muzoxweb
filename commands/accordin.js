const accordions = document.querySelectorAll(".accordion"), openAccordion = e => { const t = e.querySelector(".accordion__content"); e.classList.add("accordion__active"), t.style.maxHeight = t.scrollHeight + "px" }, closeAccordion = e => { const t = e.querySelector(".accordion__content"); e.classList.remove("accordion__active"), t.style.maxHeight = null }; function searchCommands() { var t = document.getElementById("inputCommand").value.toUpperCase(); let o = document.getElementsByClassName("accordion"); for (var c = 0; c < o.length; c++) { var a = o[c].getElementsByClassName("accordion__intro")[0]; if (a) { let e = a.textcontent || a.innerHTML; -1 < e.toUpperCase().indexOf(t) ? o[c].style.display = "" : o[c].style.display = "none" } } console.log(o.length) } accordions.forEach(e => { const t = e.querySelector(".accordion__intro"); var o = e.querySelector(".accordion__content"); t.onclick = () => { o.style.maxHeight ? closeAccordion(e) : (accordions.forEach(e => closeAccordion(e)), openAccordion(e)) } }); const tabs = document.querySelectorAll("[data-tab-target]"), tabContents = document.querySelectorAll("[data-tab-content]"); tabs.forEach(t => { t.addEventListener("click", () => { const e = document.querySelector(t.dataset.tabTarget); tabContents.forEach(e => { e.classList.remove("active-tab") }), tabs.forEach(e => { e.classList.remove("active-tab") }), t.classList.add("active-tab"), e.classList.add("active-tab") }) });
