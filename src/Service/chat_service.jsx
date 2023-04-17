import api from "../Api";

const chat_service = {

    postMessageToAI: async (message) => {
        const response = await api.post(`text_query`, message);
        return response;
    },

}

export default chat_service;
