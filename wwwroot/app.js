// виклик JS з C#
window.showAlert = (message) => {
    alert("Повідомлення з C#: " + message);
};

// Виклик C# з JS [cite: 126]
window.callDotNetMethod = async (dotNetHelper) => {
    // викликаємо метод,він позначений [JSInvokable]
    await dotNetHelper.invokeMethodAsync('GetMessageFromJS', 'Привіт від JavaScript!');
};