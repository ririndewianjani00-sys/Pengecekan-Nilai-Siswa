function prosesNilai() {
      let namaInput = document.getElementById("nama").value.trim();
      let nilaiInput = document.getElementById("nilai").value;

      if (namaInput === "" || nilaiInput === "") {
        alert("Harap isi nama dan nilai terlebih dahulu!");
        return;
      }

      let nilai = Number(nilaiInput);
      let grade = "";
      let status = "";
      let statusClass = "";

      if (nilai >= 90 && nilai <= 100) {
        grade = "A";
      } else if (nilai >= 80 && nilai < 90) {
        grade = "B";
      } else if (nilai >= 70 && nilai < 80) {
        grade = "C";
      } else if (nilai >= 60 && nilai < 70) {
        grade = "D";
      } else if (nilai >= 0 && nilai < 60) {
        grade = "E";
      } else {
        alert("Nilai harus berada di rentang 0 - 100!");
        return;
      }

      if (nilai >= 70) {
        status = "LULUS";
        statusClass = "lulus";
      } else {
        status = "TIDAK LULUS";
        statusClass = "gagal";
      }

      document.getElementById("outNama").innerText = namaInput;
      document.getElementById("outNilai").innerText = nilai;
      document.getElementById("outGrade").innerText = grade;
      
      let outStatus = document.getElementById("outStatus");
      outStatus.innerText = status;
      outStatus.className = statusClass;

      document.getElementById("hasilBox").style.display = "block";
    }