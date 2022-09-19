<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('cpf', 14);
            $table->string('logradouro', 60);
            $table->unsignedBigInteger('numero');
            $table->string('bairro', 40);
            $table->string('complemento', 20);
            $table->string('cidade', 50);
            $table->string('email', 60);
            $table->string('cep', 9);
            $table->date('dataNasc');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
};
