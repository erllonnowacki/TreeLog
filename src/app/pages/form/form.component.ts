import { ActivatedRoute, Router } from '@angular/router'
import { ProdutoService } from './../../services/produtos.service'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    form!: FormGroup
    submitted = false
    // base64String = ''

    constructor(
        private fb: FormBuilder,
        private service: ProdutoService,
        private location: Location,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        const produto = this.route.snapshot.data['produto']

        this.form = this.fb.group({
            id: [produto.id],
            nome: [
                produto.nome,
                [Validators.required, Validators.minLength(4)],
            ],
            descricao: [produto.descricao, [Validators.required]],
            preco: [produto.preco, [Validators.required]],
        })

        // this.loadProduto()
    }

    // updateProduto(produto: any) {
    //     this.form.patchValue(produto)
    // }

    // loadProduto() {
    //     this.route.params
    //         .pipe(
    //             map((params: any) => params['id']),
    //             filter((id) => !!id),
    //             switchMap((id) => this.service.getById(id))
    //         )
    //         .subscribe((produto) => produto)
    // }

    onSubmit() {
        this.submitted = true
        if (this.form.valid) {
            this.service.saveProduto(this.form.value).subscribe({
                error: (e) => console.error(e),
                complete: () => this.location.back(),
            })
            // if (this.form.value.id) {
            //     this.service.updateProduto(this.form.value).subscribe({
            //         error: (e) => console.error(e),
            //         complete: () => this.location.back(),
            //     })
            // } else {
            //     this.service.createProduto(this.form.value).subscribe({
            //         error: (e) => console.error(e),
            //         complete: () => this.location.back(),
            //     })
            // }
        }
    }

    onReset() {
        this.submitted = false
        this.form.reset()
    }

    onCancel() {
        this.location.back()
    }

    // onSubmitImage() {
    //     this.submitted = true
    //     console.log(this.form.valid && this.base64String)
    //     if (this.form.valid && this.base64String) {
    //         // verifica se a imagem foi carregada
    //         const produto = {
    //             nome: this.form.value.nome,
    //             descricao: this.form.value.descricao,
    //             preco: this.form.value.preco,
    //         }

    //         this.service
    //             .create(produto, this.base64String)
    //             .subscribe((error) => console.error(error))
    //         console.log('Cadastrado')
    //     }
    // }

    // imageUploaded(event: Event): void {
    //     const fileInput = event.target as HTMLInputElement
    //     const file = fileInput?.files?.[0]
    //     const reader = new FileReader()
    //     console.log('next')

    //     reader.onload = () => {
    //         this.base64String = (reader.result as string)
    //             .replace('data:', '')
    //             .replace(/^.+,/, '')
    //         console.log(this.base64String)
    //     }

    //     if (file) {
    //         reader.readAsDataURL(file!)
    //     }
    // }
}
