(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.getElementById("loadtime").innerText = ` клиент - ${
            endTime - startTime
        } ms`;
    });
})();