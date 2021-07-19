const axios = require('axios');

const api = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com/',
  headers: {
    "content-type": "application/json; charset=utf-8",
  }
});

const getContact = async (req,res,next) => {
  try{
    const result = await api.get('/contact');
    res.json(result.data);
  }catch(err){
    next(err);
  }
}

const createContact = async (req,res,next) => {
  try{
    const result = await api.post('/contact', req.body);
    res.json(result.data);
  }catch(err){
    next(err);
  }
}

const updateContact = async (req,res,next) => {
  try{
    const newBody = {
      ...req.body,
    }
    delete newBody.id;
    const result = await api.put(`/contact/${req.body.id}`, newBody);
    res.json(result.data);
  }catch(err){
    next(err);
  }
}

const deleteContact = async (req,res,next) => {
  try{
    const result = await api.delete(`/contact/${req.params.id}`);
    res.json(result.data);
  }catch(err){
    next(err);
  }
}

module.exports = {
  getContact,
  createContact,
  updateContact,
  deleteContact
};
