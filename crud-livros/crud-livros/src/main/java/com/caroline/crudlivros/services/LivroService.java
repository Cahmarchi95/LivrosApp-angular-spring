package com.caroline.crudlivros.services;
import com.caroline.crudlivros.model.dto.LivroDto;
import com.caroline.crudlivros.model.entity.Livro;
import com.caroline.crudlivros.model.repository.LivroRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@Service
public class LivroService {

    private final LivroRepository livroRepository;

    @Autowired
    public LivroService(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }
    public void cadastrar(@Valid LivroDto livroDto) {
        Livro livro = new Livro();
        livro.setTitulo(livroDto.getTitulo());
        livro.setAutor(livroDto.getAutor());
        livro.setEditora(livroDto.getEditora());
        livro.setGenero(livroDto.getGenero());
        livro.setDescricao(livroDto.getDescricao());
        livro.setAnoLancamento(livroDto.getAnoLancamento());
        livroRepository.save(livro);
    }

    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    public Optional<Livro> listarPorId(Integer id){
        return livroRepository.findById(id);
    }

    public void excluir(Integer id, Livro livro) {
         livroRepository.delete(livro);

    }

    public void atualizar(Integer id, @Valid LivroDto livroDto) {
        Livro livro = livroRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado"));
        livro.setTitulo(livroDto.getTitulo());
        livro.setAutor(livroDto.getAutor());
        livro.setEditora(livroDto.getEditora());
        livro.setDescricao(livroDto.getDescricao());
        livro.setGenero(livroDto.getGenero());
        livro.setAnoLancamento(livroDto.getAnoLancamento());
        livroRepository.save(livro);
    }


}

