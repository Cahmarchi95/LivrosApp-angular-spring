package com.caroline.crudlivros.model.dto;

import jakarta.persistence.*;
import lombok.Data;


@Data
public class LivroDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String autor;
    private String editora;
    private String descricao;
    private String genero;
    private Integer anoLancamento;

}

