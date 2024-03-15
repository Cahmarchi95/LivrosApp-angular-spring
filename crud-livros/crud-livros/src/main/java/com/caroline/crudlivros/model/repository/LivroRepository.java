package com.caroline.crudlivros.model.repository;

import com.caroline.crudlivros.model.entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livro,Integer> {
}
