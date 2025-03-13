// WhatsApp Chat Bot
document.addEventListener('DOMContentLoaded', function() {
    // Create the WhatsApp chat bot elements
    const chatBot = document.createElement('div');
    chatBot.className = 'whatsapp-chat-bot';
    
    // Phone number for WhatsApp
    const phoneNumber = '+5492617131433';
    
    // Create the chat bot content
    chatBot.innerHTML = `
        <div class="chat-bot-icon">
            <i class="fab fa-whatsapp"></i>
        </div>
        <div class="chat-bot-popup">
            <div class="chat-bot-header">
                <div class="chat-bot-avatar">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <div class="chat-bot-title">
                    <h4>Nahuel Albornoz</h4>
                    <p>Normalmente responde en minutos</p>
                </div>
                <div class="chat-bot-close">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="chat-bot-body">
                <div class="chat-bot-message">
                    <p>¡Hola! Gracias por contactarme. Estoy disponible para responder tus consultas sobre Business Intelligence, Data Analytics o cualquier otro servicio.</p>
                </div>
            </div>
            <div class="chat-bot-footer">
                <a href="https://wa.me/${phoneNumber}" target="_blank" class="chat-bot-button">
                    Iniciar conversación <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    `;
    
    // Append the chat bot to the body
    document.body.appendChild(chatBot);
    
    // Add event listeners for opening and closing the chat popup
    const chatIcon = chatBot.querySelector('.chat-bot-icon');
    const chatPopup = chatBot.querySelector('.chat-bot-popup');
    const chatClose = chatBot.querySelector('.chat-bot-close');
    
    chatIcon.addEventListener('click', function() {
        chatPopup.classList.add('active');
        chatIcon.classList.add('hide');
    });
    
    chatClose.addEventListener('click', function() {
        chatPopup.classList.remove('active');
        chatIcon.classList.remove('hide');
    });
});
