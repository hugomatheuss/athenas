<?php

namespace Tests\Unit;

use App\Models\Pessoa;
use Tests\TestCase;

class PessoaTest extends TestCase
{
    public function test_can_list_pessoas()
    {
        $pessoas = Pessoa::factory()->count(3)->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json('GET', route('api.pessoas'))
            ->assertStatus(200);
    }

    public function test_can_create_pessoa()
    {
        $pessoa = Pessoa::factory()->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json('POST', route('api.pessoas.store'), $pessoa->toArray())
            ->assertStatus(200);
    }

    public function test_can_show_pessoa()
    {
        $pessoa = Pessoa::factory()->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json(
                'GET', 
                route(
                    'api.pessoas.show', 
                    ['pessoa' => $pessoa]), 
                    $pessoa->toArray()
                )
            ->assertStatus(200);
    }

    public function test_can_update_pessoa()
    {
        $pessoa = Pessoa::factory()->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json(
                'PUT', 
                route(
                    'api.pessoas.update', 
                    ['pessoa' => $pessoa]), 
                    $pessoa->toArray()
                )
            ->assertStatus(200);
    }

    public function test_can_delete_pessoa()
    {
        $pessoa = Pessoa::factory()->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json(
                'DELETE', 
                route(
                    'api.pessoas.update', 
                    ['pessoa' => $pessoa]), 
                    $pessoa->toArray()
                )
            ->assertStatus(200);
    }
}
