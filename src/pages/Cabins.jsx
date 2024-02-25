import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Все домики</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <AddCabin />
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
