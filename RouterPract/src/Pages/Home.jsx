import {NavBar} from './NavBar';

import { NavLink, useSearchParams } from 'react-router';
import { useState } from 'react';
import { Filter } from '../component/Filter';




export function Home(){

 

    return<>
    <NavBar />
    <Filter />
    </>

}