<template>
    <form @submit.prevent="handleSubmit" class="form-new">
        <h2>TELA CADASTRO</h2>

        <label for="name">Nome Completo:</label>
        <input type="text" id="name" v-model="name">

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">

        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" v-model="dataNascimento">

        <label for="whatsapp">WhatsApp:</label>
        <input type="phone" id="whatsapp" v-model="whatsapp">

        <label for="areaInteresse">Área de Interesse:</label>
        <select id="areaInteresse" v-model="areaInteresse">
            <option value="">Selecione um item</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Full Stack">Full Stack</option>
        </select>

        <label for="nivelProfissional">Nível profissional:</label>
        <select id="nivelProfissional" v-model="nivelProfissional">
            <option value="">Selecione um item</option>
            <option value="Junior">Junior</option>
            <option value="Pleno">Pleno</option>
            <option value="Senior">Senior</option>
        </select>

        <p>Selecione suas habilidades:</p>

        <div v-if="areaInteresse === 'Frontend' || areaInteresse === 'Full Stack'">
            <label><input type="checkbox" value="HTML" v-model="habilidades">HTML</label>
            <label><input type="checkbox" value="CSS" v-model="habilidades">CSS</label>
            <label><input type="checkbox" value="Java Script" v-model="habilidades">Java Script</label>
            <label><input type="checkbox" value="Vue" v-model="habilidades">Vue</label>
        </div>

        <div v-if="areaInteresse === 'Backend' || areaInteresse === 'Full Stack'">
            <label><input type="checkbox" value="Node" v-model="habilidades">Node</label>
            <label><input type="checkbox" value="PHP" v-model="habilidades">PHP</label>
            <label><input type="checkbox" value="Laravel" v-model="habilidades">Laravel</label>
            <label><input type="checkbox" value="Java" v-model="habilidades">Java</label>
        </div>

        <label for="CartaApresentacao">Carta de Apresentação:</label>
        <textarea id="CartaApresentacao" cols="30" rows="10" v-model="CartaApresentacao"></textarea>

        <button type="submit">Cadastrar</button>
    </form>
</template>

<script>

import * as yup from 'yup'

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
                    CartaApresentacao: this.CartaApresentacao,
                })
            } catch (error) {
                alert('erro no formulário')
            }
        },
        watch: {
            areaInteresse(newValue, oldValue) {
                if (newValue !== oldValue) {
                    this.habilidades = []
                }
            },
        },

    }
}
</script>

<style scoped>
.form-new {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
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
  automaticamente assume zero.
    
    
    
    
    
    -->