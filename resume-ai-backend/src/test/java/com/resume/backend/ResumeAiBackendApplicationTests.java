package com.resume.backend;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.resume.backend.Service.ResumeService;

@SpringBootTest
class ResumeAiBackendApplicationTests {

	@Autowired
	private ResumeService resumeService;
	@Test
	void contextLoads() throws IOException {

		resumeService.generateResumeResponse("I am durgesh tiwari with 2 year of java exp .");
	}

}
