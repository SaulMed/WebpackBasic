import {showAlert} from './messages.js';
import './styles.css';
import $ from 'jquery';
import {v4} from 'uuid';

$('#btn-jq').click(()=>{
    alert('Working with JQuery '+ v4())
})

document.getElementById('btn-js').addEventListener('click',showAlert)