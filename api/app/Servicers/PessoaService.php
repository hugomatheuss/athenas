<?php

namespace App\Servicers;

use App\Interfaces\IService;
use App\Repositories\PessoaRepository;

class PessoaService implements IService {

    protected $repository;

    public function __construct(PessoaRepository $pessoaRepository)
    {
        $this->repository = $pessoaRepository;
    }

    public function getAll()
    {
        return $this->repository->getAll();
    }

    public function getOne(string $id)
    {
        return $this->repository->getOne($id);
    }

    public function create(array $data)
    {
        return $this->repository->create($data);
    }

    public function update(array $data, string $id)
    {
        return $this->repository->update($data, $id);
    }

    public function delete(string $id)
    {
        return $this->repository->delete($id);
    }
}