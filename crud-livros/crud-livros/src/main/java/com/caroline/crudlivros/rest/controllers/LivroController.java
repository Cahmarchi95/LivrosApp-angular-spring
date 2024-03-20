package com.caroline.crudlivros.rest.controllers;

import com.caroline.crudlivros.model.entity.Livro;
import com.caroline.crudlivros.services.LivroService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @PostMapping
    public ResponseEntity<Livro> cadastrar(@RequestBody @Valid Livro livro) {
        this.livroService.cadastrar(livro);
        return new ResponseEntity<Livro>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Livro>> listarTodos() {
        List<Livro> livros = livroService.listarTodos();

        if (livros == null || livros.isEmpty()) {
            return new ResponseEntity<List<Livro>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Livro>>(livros, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public Livro listarPorId(@PathVariable Integer id) {
        return livroService
                .listarPorId(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Integer id){
        Livro livro = livroService.listarPorId(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado"));
        livroService.excluir(id, livro);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody @Valid Livro livroAtualizado){
        livroService.listarPorId(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado"));
        livroService.atualizar(id, livroAtualizado);

    }

}
