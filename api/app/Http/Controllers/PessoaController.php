<?php

namespace App\Http\Controllers;

use App\Exceptions\PessoaException;
use App\Http\Requests\PessoaRequest;
use App\Http\Resources\PessoaResource;
use App\Servicers\PessoaService;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PessoaController extends Controller
{
    /**
     * @param  PessoaService  $pessoaService
     * @return void
     */
    public function __construct(protected PessoaService $pessoaService)
    {
        $this->pessoaService = $pessoaService;
        $this->middleware('api');
    }

    /**
     *
     * @return PessoaResource
     */
    public function index()
    {
        $pessoas = $this->pessoaService->getAll();

        return PessoaResource::collection($pessoas);
    }

    /**
     *
     * @param PessoaRequest $request
     * @return PessoaResource
     */
    public function store(PessoaRequest $request)
    {
        try {    
            $data = $this->pessoaService->create($request->validated());
            
        } catch (\Exception $e) {
            throw new Exception($e->getMessage(), $e->getCode());
        }
        
        return new PessoaResource($data);
    }

    /**
     *
     * @param string $id
     * @return PessoaResource
     */
    public function show($id)
    {
        try {
            $data = $this->pessoaService->getOne($id);

        } catch (ModelNotFoundException $e) {
            throw new PessoaException($e->getMessage(), 401);
        }
        
        return new PessoaResource($data);
    }

    /**
     *
     * @param PessoaRequest $request
     * @param string $id
     * @return json
     */
    public function update(PessoaRequest $request, $id)
    {
        try {
            $this->pessoaService->update($request->validated(), $id);
            
        } catch (ModelNotFoundException $e) {
            throw new PessoaException($e->getMessage(), 401);
        }

        return response()->json([
            'updated' => true
        ]);
    }

    /**
     * 
     * @param string $id
     * @return json
     */
    public function destroy($id)
    {
        try {
            $this->pessoaService->delete($id);

        } catch (ModelNotFoundException $e) {
            throw new PessoaException($e->getMessage(), 401);
        }

        return response()->json([
            "Deleted", 204
        ]);
    }
}
