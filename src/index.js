import { requestCall } from './modules/requestCall';
import { smoothScrollAnchor } from './modules/smoothScrollAnchor';
import { swiper } from './modules/swiper';
import { accordeon } from './modules/accordeon';
import { smoothScrollUp } from './modules/smoothScrollUp';
import { validation } from './modules/validation';
import { maskPhone } from './modules/maskPhone';
import { sendForm } from './modules/sendForm';

requestCall();
smoothScrollAnchor();
swiper();
accordeon();
smoothScrollUp();
validation();
maskPhone('[name="tel"]', '+7 (___)-___-__-__');
sendForm({ formId: '#callback-form' });
