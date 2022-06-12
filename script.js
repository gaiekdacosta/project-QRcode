const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');
let ValueDefault;

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim()
    if(!qrcodeValue || qrcodeValue === ValueDefault) return;
    ValueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR code...'
    imgQrCode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}'
    imgQrCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = 'gerar Qr code'
    })
})
