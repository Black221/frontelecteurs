import React, { useState } from 'react';
import ListesCandidats from './ListesCandidats';
import PageCandidat from './PageCandidat';
import Redirection from './Redirection';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (<>
  <Routes>
      <Route path='/' element = {<ListesCandidats/>}/>
      <Route path='/liste' element = {<ListesCandidats/>}/>
      <Route path='/:id' element = {<PageCandidat/>}/>
      <Route path='/redirection' element = {<Redirection/>}/>
  </Routes>
  </>);
}
