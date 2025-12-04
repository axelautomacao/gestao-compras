import { Components } from '../../ui/components.js';

export const AuthView = {
    renderLogin: () => {
        return `
            <div class="min-h-screen flex items-center justify-center bg-canvas px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8 bg-surface border border-border shadow-heavy p-8 rounded">
                    <div class="text-center space-y-2">
                        <h2 class="text-3xl font-display text-primary tracking-wide">
                            AXEL GESTÃO
                        </h2>
                        <p class="text-sm heading-muted">
                            Entre com suas credenciais para acessar
                        </p>
                    </div>
                    <form id="login-form" class="space-y-6">
                        <div class="space-y-4">
                            ${Components.createInput({
            id: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'seu@email.com',
            required: true,
            className: 'mb-4'
        })}
                            ${Components.createInput({
            id: 'password',
            type: 'password',
            label: 'Senha',
            placeholder: '****************',
            required: true
        })}
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <a href="#/forgot-password" class="font-display uppercase tracking-wide text-primary hover:text-primary-strong">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            ${Components.createButton({
            id: 'btn-login',
            text: 'Entrar',
            type: 'submit',
            className: 'w-full justify-center'
        })}
                        </div>
                    </form>
                </div>
            </div>
        `;
    },

    renderForgotPassword: () => {
        return `
            <div class="min-h-screen flex items-center justify-center bg-canvas px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8 bg-surface border border-border shadow-heavy p-8 rounded">
                    <div class="text-center space-y-2">
                        <h2 class="text-3xl font-display text-primary tracking-wide">
                            Recuperar Senha
                        </h2>
                        <p class="text-sm heading-muted">
                            Informe seu email para receber o link
                        </p>
                    </div>
                    <form id="forgot-form" class="space-y-6">
                        ${Components.createInput({
            id: 'email-recovery',
            type: 'email',
            label: 'Email',
            required: true
        })}

                        <div class="flex gap-4">
                            ${Components.createButton({
            id: 'btn-back',
            text: 'Voltar',
            variant: 'secondary',
            className: 'w-full justify-center',
            onClick: "window.location.hash = '/login'"
        })}
                            ${Components.createButton({
            id: 'btn-recover',
            text: 'Enviar',
            type: 'submit',
            className: 'w-full justify-center'
        })}
                        </div>
                    </form>
                </div>
            </div>
        `;
    }
};
