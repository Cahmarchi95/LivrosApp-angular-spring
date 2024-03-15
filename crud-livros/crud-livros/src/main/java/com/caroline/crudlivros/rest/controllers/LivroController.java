package com.caroline.crudlivros.rest.controllers;

import com.caroline.crudlivros.model.entity.Livro;
import com.caroline.crudlivros.model.repository.LivroRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;

    @PostMapping
    public Livro cadastrar(@RequestBody @Valid Livro livro){
        return livroRepository.save(livro);
    }

    @GetMapping
    public Iterable<Livro>listarTodos(Model model){

        return livroRepository.findAll();
    }

    @GetMapping("{id}")
    public Livro listarPorId(@PathVariable Integer id){
        return livroRepository
                .findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Livro não encontrado"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Integer id){
        livroRepository
                .findById(id)
                .map(livro -> {
                    livroRepository.delete(livro);
                    return Void.TYPE;
                })
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Livro não encontrado"));
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody @Valid Livro livroAtualizado){
        livroRepository
                .findById(id)
                .map(livro -> {
                    livroAtualizado.setId(livro.getId());
                    return livroRepository.save(livroAtualizado);
                })
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Livro não encontrado"));
    }

}
