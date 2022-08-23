-- Change foreign key constraints to ON DELETE CASCADE

ALTER TABLE "EstadoParque" 
DROP CONSTRAINT "EstadoParque_parqueId_fkey",
ADD CONSTRAINT "EstadoParque_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "EstadoParque"
DROP CONSTRAINT "EstadoParque_estadoId_fkey",
ADD CONSTRAINT "EstadoParque_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "RegionParque"
DROP CONSTRAINT "RegionParque_parqueId_fkey",
ADD CONSTRAINT "RegionParque_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "RegionParque"
DROP CONSTRAINT "RegionParque_regionId_fkey",
ADD CONSTRAINT "RegionParque_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "CategoriaParque"
DROP CONSTRAINT "CategoriaParque_parqueId_fkey",
ADD CONSTRAINT "CategoriaParque_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "CategoriaParque"
DROP CONSTRAINT "CategoriaParque_categoriaId_fkey",
ADD CONSTRAINT "CategoriaParque_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FloraParque"
DROP CONSTRAINT "FloraParque_parqueId_fkey",
ADD CONSTRAINT "FloraParque_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FloraParque"
DROP CONSTRAINT "FloraParque_floraId_fkey",
ADD CONSTRAINT "FloraParque_floraId_fkey" FOREIGN KEY ("floraId") REFERENCES "Flora"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FaunaParque"
DROP CONSTRAINT "FaunaParque_parqueId_fkey",
ADD CONSTRAINT "FaunaParque_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "FaunaParque"
DROP CONSTRAINT "FaunaParque_faunaID_fkey",
ADD CONSTRAINT "FaunaParque_faunaID_fkey" FOREIGN KEY ("faunaID") REFERENCES "Fauna"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ActividadParque"
DROP CONSTRAINT "ActividadParque_parqueId_fkey",
ADD CONSTRAINT "ActividadParque_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ActividadParque"
DROP CONSTRAINT "ActividadParque_actividadId_fkey",
ADD CONSTRAINT "ActividadParque_actividadId_fkey" FOREIGN KEY ("actividadId") REFERENCES "Actividad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Anuncio"
DROP CONSTRAINT "Anuncio_parqueId_fkey",
ADD CONSTRAINT "Anuncio_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Horario"
DROP CONSTRAINT "Horario_parqueId_fkey",
ADD CONSTRAINT "Horario_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "CartaRuta"
DROP CONSTRAINT "CartaRuta_parqueId_fkey",
ADD CONSTRAINT "CartaRuta_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "encargadoParque"
DROP CONSTRAINT "encargadoParque_parqueId_fkey",
ADD CONSTRAINT "encargadoParque_parqueId_fkey" FOREIGN KEY ("parqueId") REFERENCES "Parque"("id") ON DELETE CASCADE ON UPDATE CASCADE;