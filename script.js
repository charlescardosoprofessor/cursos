const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const vagasRestantes = ref(7);
        const planoEscolhido = ref('');
        const moduloAtivo = ref({ titulo: '', textoPopUp: '', cor: '#3333ff' });

        const selecionarPlano = (plano) => {
            planoEscolhido.value = plano;
            document.querySelector('#inscricao').scrollIntoView({ behavior: 'smooth' });
        };

        const abrirDetalhes = (modulo) => {
            moduloAtivo.value = modulo;
            const myModal = new bootstrap.Modal(document.getElementById('modalModulo'));
            myModal.show();
        };

        const modulos = ref([
            { 
                id: 1, titulo: 'Excel - Do Zero ao Essencial 📊', cor: '#107c41', 
                desc: 'Focado no mercado de trabalho: fluxo de caixa, Controle de Estoque, Calculos de Hora Extra.', 
                textoPopUp: 'Nesse módulo, você vai parar de ter medo das planilhas! Vamos aprender desde os cálculos básicos como 2^3 até funções avançadas como PROCV, SE e SOMASE. Você aprenderá a criar gráficos profissionais, fazer formatação condicional automática e organizar estoques e orçamentos domésticos com precisão.',
                detalhes: ['Estoque Mín/Máx', 'Folha de Pagamento', 'Fluxo de Caixa','Calculos Hora Extra'],
                bgImg: 'img/excel.png'
            },
            { 
                id: 2, titulo: 'Word - Documentos Profissionais e ABNT 📝', cor: '#2b579a', 
                desc: 'Edição de documentos com padrão ABNT, Matrizes', 
                textoPopUp: 'Aprenda a criar documentos que impressionam. Vou te ensinar a formatar textos seguindo as normas ABNT (margens, fontes e espaçamentos corretos), criar sumários automáticos com um clique e usar estilos para manter o padrão visual. Chega de sofrer com tabelas e imagens que saem do lugar!',
                detalhes: ['Contratos', 'Normas ABNT', 'Matrizes'],
                bgImg: 'img/word.png'
            },
            { 
                id: 3, titulo: 'Internet, Segurança e Nuvem 🌐', cor: '#00a4ef', 
                desc: 'Segurança e produtividade digital na nuvem.', 
                textoPopUp: 'Navegar na internet é muito mais do que usar o Google. Você vai aprender a identificar golpes e tentativas de roubo de dados, entender como os cookies funcionam e dominar o Gmail de forma profissional. Além disso, vamos aprender a salvar tudo na nuvem para você nunca mais perder um arquivo importante!',
                detalhes: ['Google Drive', 'Navegação Segurança', 'Gmail Profissional'],
                bgImg: 'img/internet.png'
            },
            { 
                id: 4, titulo: 'A Revolução da Inteligência Artificial 🤖', cor: '#6f42c1', 
                desc: 'Otimização de tarefas diárias com IA generativa.', 
                textoPopUp: 'O futuro chegou! Neste módulo exclusivo, você vai aprender a usar a Inteligência Artificial para trabalhar por você. Vamos dominar a criação de prompts (comandos) para o Chat GPT, descobrir ferramentas para criar imagens inéditas e automatizar tarefas repetitivas que antes levavam horas.',
                detalhes: ['Ferramentas de IA', 'Prompts Reais', 'Imagens e vídeos','Utilizando no dia a dia'],
                bgImg: 'img/ia.png'
            }
        ]);

        onMounted(() => {
            new Typed('#typed', {
                strings: ['Professor Informática', 'Consultor de Sistemas', 'Mestre em Modelagem Computacional(IA)'],
                typeSpeed: 50, loop: true
            });
            ScrollReveal().reveal('.reveal', { distance: '50px', duration: 1000 });
            
            // Simulação de preenchimento de vagas
            setTimeout(() => {
                if(vagasRestantes.value > 3) vagasRestantes.value--;
            }, 8000);
        });

        return { modulos, vagasRestantes, planoEscolhido, selecionarPlano, moduloAtivo, abrirDetalhes };
    }
}).mount('#app');