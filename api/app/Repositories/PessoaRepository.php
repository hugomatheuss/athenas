<?php
namespace App\Repositories;

use App\Interfaces\IRepository;
use App\Models\Pessoa;

class PessoaRepository implements IRepository {

    protected $entity;

    public function __construct(Pessoa $pessoa)
    {
        $this->entity = $pessoa;
    }

    public function getAll()
    {
        return $this->entity->all();
    }

    public function getOne(string $id)
    {
        return $this->entity->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->entity->create($data);
    }

    public function update(array $data, string $id)
    {
        $this->entity = $this->getOne($id);

        return $this->entity->update($data);
    }

    public function delete(string $id)
    {
        $this->entity = $this->getOne($id);

        return $this->entity->delete();
    }
}