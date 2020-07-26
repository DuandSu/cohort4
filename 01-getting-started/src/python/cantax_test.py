import cantax

def test_canAssertTrue():
    assert True

def test_calculateFederalTax():
    assert cantax.calculateFederalTax(-1) == 0
    assert cantax.calculateFederalTax(0) == 0
    assert cantax.calculateFederalTax(1) == 0.15
    assert cantax.calculateFederalTax(48535) == 7280.25
    assert cantax.calculateFederalTax(48536) == 7280.205
    assert cantax.calculateFederalTax(97069) == 17229.47
    assert cantax.calculateFederalTax(97070) == 17230.26
    assert cantax.calculateFederalTax(150473) == 31115.04
    assert cantax.calculateFederalTax(150474) == 31115.29
    assert cantax.calculateFederalTax(214368) == 49644.55
    assert cantax.calculateFederalTax(214369) == 49645.33
    assert cantax.calculateFederalTax(1000000) == 308903.56

    assert cantax.calculateFederalTax(2) == 0.30
    assert cantax.calculateFederalTax(50000) == 7580.325
    assert cantax.calculateFederalTax(100000) == 17992.06
    assert cantax.calculateFederalTax(150000) == 30992.06
    assert cantax.calculateFederalTax(250000) == 61403.56
