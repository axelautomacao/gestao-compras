import { Auth } from './auth.service.js';
import { AuthView } from './auth.view.js';
import { Router } from '../../core/router.js';
import { Components } from '../../ui/components.js';

export const AuthController = {
    initLogin: () => {
        const app = document.getElementById('app');
        app.innerHTML = AuthView.renderLogin();

        const form = document.getElementById('login-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const btn = document.getElementById('btn-login');

            try {
                btn.disabled = true;
                btn.innerHTML = Components.createLoader();

                await Auth.login(email, password);
                Components.createToast('Login realizado com sucesso!');
                Router.navigate('/');
            } catch (error) {
                console.error(error);
                let msg = 'Erro ao realizar login.';
                if (error.code === 'auth/invalid-credential') msg = 'Email ou senha incorretos.';
                Components.createToast(msg, 'error');
                btn.disabled = false;
                btn.innerHTML = '<span>Entrar</span>';
            }
        });
    },

    initForgotPassword: () => {
        const app = document.getElementById('app');
        app.innerHTML = AuthView.renderForgotPassword();

        const form = document.getElementById('forgot-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email-recovery').value;
            const btn = document.getElementById('btn-recover');

            try {
                btn.disabled = true;
                btn.innerHTML = Components.createLoader();

                await Auth.recoverPassword(email);
                Components.createToast('Email de recuperação enviado!');
                setTimeout(() => Router.navigate('/login'), 2000);
            } catch (error) {
                Components.createToast('Erro ao enviar email: ' + error.message, 'error');
                btn.disabled = false;
                btn.innerHTML = '<span>Enviar</span>';
            }
        });
    }
};
