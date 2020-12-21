import docs from ".";
import React from "react";

export default {
  title: "core",
  parameters: {
    notes: { docs }
  }
};

export function standard() {
  return <h1>See docs</h1>;
}
