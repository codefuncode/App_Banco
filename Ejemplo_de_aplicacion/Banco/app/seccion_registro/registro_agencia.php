<div class="registro_agencia all">
  <div class="">
    <div class="">
      <div class="">
        <div class="w3-container">
          <h2 class="w3-text-blue">
            Registro manual de agencias
          </h2>
          <p>
            Registro de agencia autorizado  para representantes de servicio
          </p>
          <div class="w3-row">
            <div class="w3-col" style="width:45%">
              <p>
                <input checked="checked" class="w3-check" type="checkbox"/>
                <label>
                  Publica
                </label>
                <input class="w3-check" style="margin-left: 10px;" type="checkbox"/>
                <label>
                  Privada
                </label>
              </p>
              <p>
                <label class="w3-text-blue">
                  <b>
                    Nombre de la agencia
                  </b>
                </label>
                <input class="w3-input w3-border nombre_agencia" name="nombre_agencia" type="text"/>
              </p>
              <p>
                <label class="w3-text-blue">
                  <b>
                    Balance inicial de agencia
                  </b>
                </label>
                <input class="w3-input w3-border balance_inicial" name="balance_inicial" pattern="([0-9])+\.[0-9]{2}" required="" type="number"/>
              </p>
              <p>
                <label class="w3-text-blue">
                  <b>
                    Selecciona le país
                  </b>
                </label>
                <select class="w3-select w3-card-4 w3-border lista_paises" name="option">
                </select>
              </p>
              <p>
                <label class="w3-text-blue">
                  <b>
                    Selecciona el pueblo
                  </b>
                </label>
                <select class="w3-select w3-card-4 w3-border listado_pueblos" name="option">
                </select>
              </p>
              <p>
                <button class="w3-button w3-light-green btn_registrar_agencia">
                  Registrar
                </button>
              </p>
            </div>
            <div class="w3-col" style="width:5%">
              <p>
              </p>
            </div>
            <div class="w3-col" style="width:45%">
              <p>
                <textarea class="descripcion_agencia w3-card-4 libreta_fondo_image" cols="50">
                </textarea>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
