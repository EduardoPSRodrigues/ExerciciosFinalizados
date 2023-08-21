<template>
    <form @submit.prevent="handleSubmit" class="form-new">
        <h1>Cadastro de Talentos</h1>

        <div class="form-element">
            <label for="name">Nome Completo:</label>
            <input type="text" id="name" v-model="name">
            <span class="mensagem-erro">{{ this.errors.name }}</span>
        </div>

        <div class="form-element">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
            <span class="mensagem-erro">{{ this.errors.email }}</span>
        </div>

        <div class="form-element">
            <label for="dataNascimento">Data de Nascimento:</label>
            <input type="date" id="dataNascimento" v-model="dataNascimento">
            <span class="mensagem-erro">{{ this.errors.dataNascimento }}</span>
        </div>

        <div class="form-element">
            <label for="whatsapp">WhatsApp:</label>
            <input type="phone" id="whatsapp" v-model="whatsapp">
            <span class="mensagem-erro">{{ this.errors.whatsapp }}</span>
        </div>

        <div class="form-element">
            <label for="areaInteresse">Área de Interesse:</label>
            <select id="areaInteresse" v-model="areaInteresse">
                <option value="">Selecione um item</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
            </select>
            <span class="mensagem-erro">{{ this.errors.areaInteresse }}</span>
        </div>

        <div class="form-element">
            <label for="nivelProfissional">Nível profissional:</label>
            <select id="nivelProfissional" v-model="nivelProfissional">
                <option value="">Selecione um item</option>
                <option value="Junior">Junior</option>
                <option value="Pleno">Pleno</option>
                <option value="Senior">Senior</option>
            </select>
            <span class="mensagem-erro">{{ this.errors.nivelProfissional }}</span>
        </div>

        <div class="form-element">
            <p>Selecione suas habilidades:</p>

            <div class="form-checkbox" v-if="areaInteresse === 'Frontend' || areaInteresse === 'Full Stack'">
                <label><input type="checkbox" value="HTML" v-model="habilidades">HTML</label>
                <label><input type="checkbox" value="CSS" v-model="habilidades">CSS</label>
                <label><input type="checkbox" value="Java Script" v-model="habilidades">Java Script</label>
                <label><input type="checkbox" value="Vue" v-model="habilidades">Vue</label>
            </div>
        </div>

        <div class="form-element">
            <div class="form-checkbox" v-if="areaInteresse === 'Backend' || areaInteresse === 'Full Stack'">
                <label><input type="checkbox" value="Node" v-model="habilidades">Node</label>
                <label><input type="checkbox" value="PHP" v-model="habilidades">PHP</label>
                <label><input type="checkbox" value="Laravel" v-model="habilidades">Laravel</label>
                <label><input type="checkbox" value="Java" v-model="habilidades">Java</label>
            </div>
            <span class="mensagem-erro">{{ this.errors.habilidades }}</span>
        </div>

        <div class="form-element">
            <label for="CartaApresentacao">Carta de Apresentação:</label>
            <textarea id="CartaApresentacao" cols="30" rows="10" placeholder="Digite aqui a sua carta de apresentação."
                v-model="CartaApresentacao"></textarea>
            <span class="mensagem-erro">{{ this.errors.CartaApresentacao }}</span>
        </div>

        <button type="submit">Cadastrar</button>
    </form>
</template>

<script>

import * as yup from 'yup'
import { captureErrorYup } from "../../../utils/captureErrorYup";

export default {
    data() {
        return {
            name: '',
            email: '',
            dataNascimento: '',
            whatsapp: '',
            areaInteresse: '',
            nivelProfissional: '',
            habilidades: [],
            CartaApresentacao: '',

            errors: {},
        }
    },
    methods: {
        handleSubmit() {

            try {

                const schema = yup.object().shape({

                    name: yup.string().required('O nome é obrigatório.'),
                    email: yup.string().email('O e-mail não é válido.').required('O e-mail é obrigatório.'),
                    whatsapp: yup.string().required('O telefone é obrigatório.'),
                    areaInteresse: yup.string().required('A área de interesse é obrigatória.'),
                    nivelProfissional: yup.string().required('O nível profissional é obrigatório.'),
                    CartaApresentacao: yup.string().min(10, "A carta de apresentação deve ter no mínimo 10 caracteres.").max(1000, "A carta de apresentação deve ter entre 10-1000 caracteres.").required('A carta de apresentação é obrigatória.'),

                })

                schema.validateSync({
                    name: this.name,
                    email: this.email,
                    whatsapp: this.whatsapp,
                    areaInteresse: this.areaInteresse,
                    nivelProfissional: this.nivelProfissional,
                    habilidades: this.habilidades,
                    CartaApresentacao: this.CartaApresentacao,
                }, { abortEarly: false })

                axios({
                    url: 'http://localhost:3000/api/talent',
                    method: 'POST',
                    data: {
                        name: this.name,
                        email: this.email,
                        dataNascimento: this.dataNascimento,
                        whatsapp: this.whatsapp,
                        areaInteresse: this.areaInteresse,
                        nivelProfissional: this.nivelProfissional,
                        habilidades: this.habilidades,
                        CartaApresentacao: this.CartaApresentacao
                    }
                })
                    .then(() => {
                        alert('Cadastrado com sucesso.')
                    })
                    .catch(() => {
                        alert('Houve um erro ao cadastrar.')
                    })
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    //Um erro gerado pelo YUP.
                    this.errors = captureErrorYup(error)
                    console.log(captureErrorYup(error));
                }
            }
        },
        watch: {
            areaInteresse: function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    this.habilidades = []
                }
            }
        }
    }
}
</script>

<style scoped>
.form-new {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    border-radius: 4px;
    border: 2px solid #d3d0d0d5;
    gap: 16px;
    padding: 12px;
}

.form-element {
    display: flex;
    flex-direction: column;
    width: 70%;
}

.form-checkbox {
    display: flex;
    gap: 10px;
}

.mensagem-erro {
    color: red;
    margin: 4px;
    font-size: small;
}

label,
h1,
p {
    font-weight: bold;

}

button {
    background-color: #4bb4f8;
    color: white;

    font-size: 16px;

    height: 40px;
    width: 40%;

    border-radius: 8px;
    border: none;
}

button:hover {
    background-color: #2985c2;
}
</style>

<!-- Informações do projeto.
    
* Adicionar vários checkbox usando o v-for 
     <div v-if="areaInteresse === 'Backend' || areaInteresse === 'Full Stack'">
     <label v-for="(skill, index) in ['Node', 'PHP', 'Laravel', 'Java']" :key="index">
     <input type="checkbox" v-model="habilidades" :value="skill">{{ skill }}
     </label>
     </div> 
* wacth é um escutado, ou seja, estou monitorando a minha variável habiildades, caso ela seja alterada, o seu valor 
  automaticamente assume zero. -->