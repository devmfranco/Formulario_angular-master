
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-form-principal',
  templateUrl: './form-principal.component.html',
  styleUrls: ['./form-principal.component.css']
})
export class FormPrincipalComponent {

  nombreCompleto!: string;
  viceMinisterioDireccion!: string;
  ubicacionEspecifica!: string;
  numeroContacto!: string;
  ayudaNecesaria!: string;
  tipoServicio!: string;
  abre = false;
  @Input() usuario = 'prueba';


validar = false;
  onSubmit() {
    // Aquí puedes realizar acciones con los datos del formulario
    console.log('Formulario enviado');
    console.log('Nombre completo: ' + this.nombreCompleto);
    console.log('Vice-ministerio o dirección: ' + this.viceMinisterioDireccion);
    console.log('Ubicación específica: ' + this.ubicacionEspecifica);
    console.log('Número de contacto o extensión: ' + this.numeroContacto);
    console.log('Ayuda necesaria: ' + this.ayudaNecesaria);
    console.log('Tipo de servicio: ' + this.tipoServicio);
  }

  imageUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {

    // Ruta de la imagen relativa a la carpeta de activos (assets)
    const imagePath = 'src/logo-micm-invertido.png';
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }
   areas = {
    desViceMinistro : 'Despacho del Vice-Ministro',
    Vicomex:'Viceministerio Comercio Exterior',
    VCI:'Viceministerio Comercio Interno',
    VDI:'Viceministerio Desarrollo Industrial',
    vicePymes:'Viceministerio Fomento Pequeña y Media Emp.',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',
    Area:'',


   }

  options = [
    { value: 'option1', label: 'Option 1', fields: [
      { label: '6. Seleccione el tipo de servicio en el cuál necesita ayuda? ', type: 'text', value: '', placeholder: 'Enter Field 1' }
    ] },
    { value: 'option2', label: 'Option 2', fields: [
      { label: '6. Seleccione el tipo de servicio en el cuál necesita ayuda? ', type: 'text', value: '', placeholder: 'Enter Field 1' },
      { label: 'Field 2', type: 'number', value: null, placeholder: 'Enter Field 2' }
    ]},
    { value: 'option3', label: 'Option 3', fields: [
      { label: 'Field 3', type: 'text', value: '', placeholder: 'Enter Field 3' }
    ]}
  ];
optionsService = [
  { value: 'option1', label: 'Option 1', fields: [
    { label: '6. Seleccione el tipo de servicio en el cuál necesita ayuda? ', type: 'text', value: '', placeholder: 'Enter Field 1' }
  ] },
  { value: 'option2', label: 'Option 2', fields: [
    { label: '6. Seleccione el tipo de servicio en el cuál necesita ayuda? ', type: 'text', value: '', placeholder: 'Enter Field 1' },
    { label: 'Field 2', type: 'number', value: null, placeholder: 'Enter Field 2' }
  ]},
  { value: 'option3', label: 'Option 3', fields: [
    { label: 'Field 3', type: 'text', value: '', placeholder: 'Enter Field 3' }
  ]}
];
selectedOption: any;
serviceDetail : any;
selectedServiceOption: any;

  onOptionSelected(selectedValue: string) {
    this.selectedOption = this.options.find(option => option.value === selectedValue);
  }




}
