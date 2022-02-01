import React from "react";

export default function SearchBar({
  value,
  isLoading,
  handleSubmit,
  onChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search"
      ></input>
      <input
        className="btn"
        disabled={isLoading || !value}
        type="submit"
        value="Search"
      ></input>
    </form>
  );
}
