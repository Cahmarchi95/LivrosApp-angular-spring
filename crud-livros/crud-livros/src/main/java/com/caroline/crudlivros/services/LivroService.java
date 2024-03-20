package com.caroline.crudlivros.services;
import com.caroline.crudlivros.model.entity.Livro;
import com.caroline.crudlivros.model.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;



@Service
public class LivroService {
    @Autowired
    private final LivroRepository livroRepository;

    public LivroService(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    public void cadastrar(Livro livro) {
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

    public void atualizar(Integer id, Livro livroAtualizado) {
        Livro livroExistente = livroRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado"));
        livroExistente.setTitulo(livroAtualizado.getTitulo());
        livroExistente.setAutor(livroAtualizado.getAutor());
        livroExistente.setEditora(livroAtualizado.getEditora());
        livroExistente.setDescricao(livroAtualizado.getDescricao());
        livroExistente.setGenero(livroAtualizado.getGenero());
        livroExistente.setAnoLancamento(livroAtualizado.getAnoLancamento());

        livroRepository.save(livroExistente);
    }


}

