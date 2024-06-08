import httpRequest from '~/utils/httpRequest';

const getInvoices = async ({ page }: { page?: number }) => {
    return await httpRequest.get('/invoices', {
        params: {
            page,
        },
    });
};

const createInvoice = async (data: any) => {
    return await httpRequest.post('/invoices', data);
};

const updateInvoice = async (data: any, id: number) => {
    return await httpRequest.put('/invoices/' + id, data);
};

const deleteInvoice = async (id: number) => {
    return await httpRequest.delete('/invoices/' + id);
};

const invoiceService = {
    getInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice,
};

export default invoiceService;
