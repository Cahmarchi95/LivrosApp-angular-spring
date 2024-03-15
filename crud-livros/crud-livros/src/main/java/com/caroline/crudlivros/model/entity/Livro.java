package com.caroline.crudlivros.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Entity
@Data
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    @NotEmpty(message = "{campo.titulo.obrigatorio}")
    private String titulo;

    @Column(nullable = false, length = 150)
    @NotEmpty(message = "{campo.autor.obrigatorio}")
    private String autor;

    @Column(nullable = false, length = 150)
    @NotEmpty(message = "{campo.editora.obrigatorio}")
    private String editora;

    @Column(nullable = false, length = 500)
    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    @Size(min=100, max= 500,message = "{campo.descricao.tamanho}")
    private String descricao;

    @Column(nullable = false, length = 150)
    @NotEmpty(message = "{campo.genero.obrigatorio}")
    private String genero;

    @Column(nullable = false)
    @NotNull(message = "{campo.anoLancamento.obrigatorio}")
    @Positive(message = "{campo.anoLancamento.positivo}")
    private Integer anoLancamento;

}




