package xyz.snapspot.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Health Check Controller
 */
@RestController
@RequestMapping("/health-check")
class HealthCheckController {
    @GetMapping
    fun healthCheck(): ResponseEntity<String> = ResponseEntity.ok("OK")
}
