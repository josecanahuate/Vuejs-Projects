//reutilizando metodo getData con composables;
import axios from 'axios';
import { ref } from "vue";
export const useGetData = () => {

    const data = ref(null);
    const errorData = ref(null);
    const loading = ref(true);

    const getData = async (url) => {
        loading.value = true
        try {
            const res = await axios.get(url)
            data.value = res.data;
        } catch (error) {
            console.log(error);
            errorData.value = 'Error de Servidor'
        } finally {
            loading.value = false;
        }
    };

    return {
        getData,
        data,
        loading,
        errorData,
    }
};