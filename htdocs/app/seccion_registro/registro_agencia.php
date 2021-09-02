<div class="registro_agencia all">
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
               <label class="w3-text-blue">
                  <b>
                     Nombre de la agencia
                  </b>
               </label>
               <input class="w3-input w3-border" name="nombre_agencia" type="text"/>
            </p>
            <p>
               <label class="w3-text-blue">
                  <b>
                     País al que pertenece
                  </b>
               </label>
               <select class="w3-select" name="option">
                  <option disabled="" selected="" value="">
                     Selecciona un país
                  </option>
                  <option value="1">
                     Option 1
                  </option>
                  <option value="2">
                     Option 2
                  </option>
                  <option value="3">
                     Option 3
                  </option>
               </select>
            </p>
            <p>
               <button class="w3-button w3-orange">
                  Agregar un pais
               </button>
            </p>
            <p>
               <label class="w3-text-blue">
                  <b>
                     Pueblo al que pertenece
                  </b>
               </label>
               <select class="w3-select" name="option">
                  <option disabled="" selected="" value="Selecciona un pueblo">
                     Selecciona un pueblo
                  </option>
                  <!--     <option value="1">
                     Option 1
                  </option>
                  <option value="2">
                     Option 2
                  </option>
                  <option value="3">
                     Option 3
                  </option> -->
               </select>
            </p>
            <p>
               <button class="w3-button w3-orange">
                  Agregar un pueblo
               </button>
            </p>
            <p>
               <label class="w3-text-blue">
                  <b>
                     Saldo inicial del agencia
                  </b>
               </label>
               <input class="w3-input w3-border" name="saldo_inicial" type="number"/>
            </p>
         </div>
         <div class="w3-col" style="width:5%">
            <p>
            </p>
         </div>
         <div class="w3-col" style="width:45%">
            <p>
               <label class="w3-text-blue">
                  <b>
                     Descripción de la agencia
                  </b>
               </label>
               <br/>
               <textarea class="textarea_registro_agencia">
               </textarea>
            </p>
         </div>
      </div>
      <div class="">
         <p>
            <button class="w3-button w3-light-green btn_registrar_agencia">
               Registrar
            </button>
         </p>
      </div>
   </div>
</div>
