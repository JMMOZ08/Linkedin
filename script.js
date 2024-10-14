document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade de Adicionar Perfil
    const addProfileButton = document.querySelector('.profile-card button');
    addProfileButton.addEventListener('click', () => {
        alert('Função de adicionar perfil ainda não implementada.');
    });

    // Funcionalidade de Curtir
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCount = button.nextElementSibling;
            let count = parseInt(likeCount.textContent);

            if (button.classList.contains('liked')) {
                count--;
                button.classList.remove('liked');
            } else {
                count++;
                button.classList.add('liked');
            }

            likeCount.textContent = count;
        });
    });

    // Funcionalidade de Comentários
    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            const commentText = input.value.trim();

            if (commentText !== '') {
                const commentsList = form.nextElementSibling;
                const comment = document.createElement('div');
                comment.classList.add('comment');

                comment.innerHTML = `
                    <img src="https://via.placeholder.com/30" alt="Foto de Comentário">
                    <div class="comment-content">
                        <p>${commentText}</p>
                    </div>
                `;

                commentsList.appendChild(comment);
                input.value = '';
            }
        });
    });

    // Funcionalidade de Compartilhar
    const shareButtons = document.querySelectorAll('.share-button');

    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Simulando a ação de compartilhar copiando o link do post
            const post = button.closest('.post');
            const uniqueID = Math.random().toString(36).substr(2, 9);
            const postURL = window.location.href.split('#')[0] + '#' + uniqueID; // Geração de um ID aleatório
            navigator.clipboard.writeText(postURL)
                .then(() => {
                    alert('Link do post copiado para a área de transferência!');
                })
                .catch(err => {
                    console.error('Erro ao copiar o link: ', err);
                });
        });
    });

    // Funcionalidade de Criar Nova Postagem
    const postTextarea = document.querySelector('.post-creation textarea');
    const feed = document.querySelector('.feed');

    postTextarea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const content = postTextarea.value.trim();

            if (content !== '') {
                const newPost = document.createElement('div');
                newPost.classList.add('post');
                newPost.innerHTML = `
                    <div class="post-header">
                        <img src="https://via.placeholder.com/50" alt="Foto de Perfil">
                        <div>
                            <h3>Seu Nome</h3>
                            <p>Profissão • Agora</p>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>${content}</p>
                    </div>
                    <div class="post-footer">
                        <button class="like-button"><i class="fas fa-thumbs-up"></i> Curtir</button>
                        <span class="like-count">0</span>
                        <button class="comment-button"><i class="fas fa-comment"></i> Comentar</button>
                        <button class="share-button"><i class="fas fa-share"></i> Compartilhar</button>
                    </div>
                    <div class="comments-section">
                        <form class="comment-form">
                            <input type="text" placeholder="Escreva um comentário..." required>
                            <button type="submit">Comentar</button>
                        </form>
                        <div class="comments-list">
                            <!-- Comentários serão adicionados aqui dinamicamente -->
                        </div>
                    </div>
                `;
                feed.prepend(newPost);
                postTextarea.value = '';

                // Reaplicar as funcionalidades nos novos elementos
                addLikeFunctionality(newPost.querySelector('.like-button'));
                addCommentFunctionality(newPost.querySelector('.comment-form'));
                addShareFunctionality(newPost.querySelector('.share-button'));
            }
        }
    });

    // Funções Auxiliares para Reaplicar Funcionalidades em Novos Posts
    function addLikeFunctionality(button) {
        button.addEventListener('click', () => {
            const likeCount = button.nextElementSibling;
            let count = parseInt(likeCount.textContent);

            if (button.classList.contains('liked')) {
                count--;
                button.classList.remove('liked');
            } else {
                count++;
                button.classList.add('liked');
            }

            likeCount.textContent = count;
        });
    }

    function addCommentFunctionality(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            const commentText = input.value.trim();

            if (commentText !== '') {
                const commentsList = form.nextElementSibling;
                const comment = document.createElement('div');
                comment.classList.add('comment');

                comment.innerHTML = `
                    <img src="https://via.placeholder.com/30" alt="Foto de Comentário">
                    <div class="comment-content">
                        <p>${commentText}</p>
                    </div>
                `;

                commentsList.appendChild(comment);
                input.value = '';
            }
        });
    }

    function addShareFunctionality(button) {
        button.addEventListener('click', () => {
            const post = button.closest('.post');
            const uniqueID = Math.random().toString(36).substr(2, 9);
            const postURL = window.location.href.split('#')[0] + '#' + uniqueID; // Geração de um ID aleatório
            navigator.clipboard.writeText(postURL)
                .then(() => {
                    alert('Link do post copiado para a área de transferência!');
                })
                .catch(err => {
                    console.error('Erro ao copiar o link: ', err);
                });
        });
    }
});
